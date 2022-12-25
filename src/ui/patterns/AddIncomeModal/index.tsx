import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { AnyFunction } from '../../../common/types';
import ModalDialog from '../../components/ModalDialog';
import useManageData from '../../../firebase/useManageData';
import IncomeFields from '../IncomeFields';
import useIncomeFields from '../../../common/hooks/useIncomeFields';
import { isObjEmpty } from '../../../common/utils';

type AddIncomeModalProps = {
  isOpen: boolean;
  onClose: AnyFunction;
};

const AddIncomeModal = ({ isOpen, onClose }: AddIncomeModalProps) => {
  const [showErrors, showErrorsSet] = useState(false);
  const [validationErrors, validationErrorsSet] = useState({});

  const { addIncome } = useManageData();

  const { values, handlers, validation, onResetValues } = useIncomeFields();

  useEffect(() => {
    validationErrorsSet(showErrors ? validation : {});
  }, [showErrors, validation]);

  const closeAndReset = () => {
    onClose();
    showErrorsSet(false);
    onResetValues();
  };

  const onAddIncome = () => {
    showErrorsSet(true);

    if (!isObjEmpty(validation)) {
      return;
    }

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
        handlers={handlers}
        validation={validationErrors}
      />
    </ModalDialog>
  );
};

export default AddIncomeModal;
