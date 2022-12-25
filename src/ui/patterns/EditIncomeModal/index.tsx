import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { AnyFunction } from '../../../common/types';
import ModalDialog from '../../components/ModalDialog';
import useManageData from '../../../firebase/useManageData';
import { getIncomes } from '../../../redux/store';
import useIncomeFields from '../../../common/hooks/useIncomeFields';
import IncomeFields from '../IncomeFields';

type EditIncomeModalProps = {
  id: string;
  isOpen: boolean;
  onClose: AnyFunction;
};

const EditIncomeModal = ({ id, isOpen, onClose }: EditIncomeModalProps) => {
  const { items } = useSelector(getIncomes);
  const incomeToEdit = items.find((income) => income.id === id);

  const defaultValues = incomeToEdit && {
    amount: incomeToEdit.amount,
    comment: incomeToEdit.comment,
    currency: incomeToEdit.currency,
  };

  const { changeIncome } = useManageData();

  const { values, handlers, onResetValues } = useIncomeFields(defaultValues);

  const closeAndReset = () => {
    onClose();
    onResetValues();
  };

  const onIncomeChage = () => {
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
      <IncomeFields values={values} handlers={handlers} />
    </ModalDialog>
  );
};

export default EditIncomeModal;
