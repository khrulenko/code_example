import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { AnyFunction } from '../../../common/types';
import ModalDialog from '../../components/ModalDialog';
import useManageData from '../../../firebase/useManageData';
import { getIncomes } from '../../../redux/store';
import useIncomeFields from '../../../common/hooks/useIncomeFields';
import IncomeFields from '../IncomeFields';
import { isObjEmpty } from '../../../common/utils';

type EditIncomeModalProps = {
  id: string;
  isOpen: boolean;
  onClose: AnyFunction;
};

const EditIncomeModal = ({ id, isOpen, onClose }: EditIncomeModalProps) => {
  const [showErrors, showErrorsSet] = useState(false);
  const [validationErrors, validationErrorsSet] = useState({});

  const { changeIncome } = useManageData();

  const { items } = useSelector(getIncomes);
  const incomeToEdit = items.find((income) => income.id === id);

  const defaultValues = incomeToEdit && {
    amount: incomeToEdit.amount,
    comment: incomeToEdit.comment,
    currency: incomeToEdit.currency,
  };

  const { values, handlers, validation, onResetValues } =
    useIncomeFields(defaultValues);

  useEffect(() => {
    validationErrorsSet(showErrors ? validation : {});
  }, [showErrors, validation]);

  const closeAndReset = () => {
    onClose();
    onResetValues();
  };

  const onIncomeChage = () => {
    showErrorsSet(true);

    if (!isObjEmpty(validation)) {
      return;
    }

    changeIncome(id, values);
    closeAndReset();
  };

  return (
    <ModalDialog
      onClose={closeAndReset}
      open={isOpen}
      header={'Change income'}
      actions={
        <Button variant="contained" onClick={onIncomeChage}>
          Save changes
        </Button>
      }
    >
      <IncomeFields
        values={values}
        handlers={handlers}
        validation={validationErrors}
      />
    </ModalDialog>
  );
};

export default EditIncomeModal;
