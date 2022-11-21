import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collections } from '../common/constants';
import { getCurrentISODate } from '../common/utils';
import {
  setIncomes,
  startLoadingIncomes,
  endLoadingIncomes,
} from '../redux/slices/incomesSlice';
import { getIncomes, getUser } from '../redux/store';
import { db } from './firebaseInit';

type NewIncomeData = {
  amount?: number;
  date?: string;
  name?: string;
  currensy?: string;
};

const useManageData = () => {
  const user = useSelector(getUser);
  const { items: incomes } = useSelector(getIncomes);

  const dispatch = useDispatch();

  const profileRef = useMemo(
    () => user?.uid && doc(db, Collections.PROFILES, user.uid),
    [user?.uid]
  );

  const listenToIncomesChanges = () => {
    if (!profileRef) {
      dispatch(setIncomes([]));

      return;
    }

    const unsubscribe = onSnapshot(
      profileRef,
      (profileData) => {
        dispatch(startLoadingIncomes());

        const incomes = profileData?.data()?.incomes;

        dispatch(setIncomes(incomes));
        dispatch(endLoadingIncomes());
      },
      ({ code, message }) => {
        console.log('-!error in listenToIncomesChanges', code, message);
      }
    );

    return unsubscribe;
  };

  const addIncome = ({ amount, name, currensy }: any) => {
    if (!profileRef) return;

    try {
      updateDoc(profileRef, {
        incomes: arrayUnion({
          id: nanoid(),
          amount,
          date: getCurrentISODate(),
          name,
          currensy,
        }),
      });
    } catch ({ code, message }) {
      console.log('-!error in addIncome', code, message);
    }
  };

  const getCollection = async (collectionName: string) => {
    try {
      const collRef = collection(db, collectionName);
      const collDocuments = await getDocs(collRef);

      const docsList = collDocuments.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      return docsList;
    } catch ({ code, message }) {
      console.log('-!error in getCollection', code, message);
    }
  };

  const changeIncome = (incomeId: string, newIncomeData: NewIncomeData) => {
    if (!profileRef) return;

    const changingIncomeIndex = incomes.findIndex((inc) => inc.id === incomeId);
    const incomesWithChangedIncome = [...incomes];
    const changingIncome = incomes[changingIncomeIndex];

    incomesWithChangedIncome.splice(changingIncomeIndex, 1, {
      ...changingIncome,
      ...newIncomeData,
    });

    try {
      updateDoc(profileRef, {
        incomes: incomesWithChangedIncome,
      });
    } catch ({ code, message }) {
      console.log('-!error in changeIncome', code, message);
    }
  };

  const deleteIncome = (incomeId: string) => {
    if (!profileRef) return;

    const deletingIncomeIndex = incomes.findIndex((inc) => inc.id === incomeId);
    const deletingIncome = incomes[deletingIncomeIndex];

    try {
      updateDoc(profileRef, {
        incomes: arrayRemove(deletingIncome),
      });
    } catch ({ code, message }) {
      console.log('-!error in chadeleteIncomengeIncome', code, message);
    }
  };

  return {
    addIncome,
    listenToIncomesChanges,
    getCollection,
    changeIncome,
    deleteIncome,
  };
};

export default useManageData;
