import { Button } from '@mui/material';
import { AnyFunction } from '../../../common/types';
import ModalDialog from '../../components/ModalDialog';
import useManageData from '../../../firebase/useManageData';
import IncomeFields from '../IncomeFields';
import useIncomeFields from '../../../common/hooks/useIncomeFields';

type AddIncomeModalProps = {
  isOpen: boolean;
  onClose: AnyFunction;
};

const AddIncomeModal = ({ isOpen, onClose }: AddIncomeModalProps) => {
  const { addIncome } = useManageData();

  const {
    values,
    onResetValues,
    handleAmountChange,
    handleCommentChange,
    handleCurrencyChange,
  } = useIncomeFields();

  const closeAndReset = () => {
    onClose();
    onResetValues();
  };

  const onAddIncome = () => {
    addIncome(values);
    closeAndReset();
  };

  return (
    <ModalDialog
      onClose={closeAndReset}
      open={isOpen}
      header={'Create new income'}
      actions={
        <Button variant="contained" onClick={onAddIncome}>
          Add income
        </Button>
      }
    >
      <IncomeFields
        values={values}
        onAmountChange={handleAmountChange}
        onCommentChange={handleCommentChange}
        onCurrencyChange={handleCurrencyChange}
      />
    </ModalDialog>
  );
};

export default AddIncomeModal;