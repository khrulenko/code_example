import { Button } from '@mui/material';
import { AnyFunction } from '../../../common/types';
import ModalDialog from '../../components/ModalDialog';
import useManageData from '../../../firebase/useManageData';

type EditIncomeModalProps = {
  id: string;
  isOpen: boolean;
  onClose: AnyFunction;
};

const DeleteIncomeModal = ({ id, isOpen, onClose }: EditIncomeModalProps) => {
  const { deleteIncome } = useManageData();
  const onDeleteIncome = () => {
    deleteIncome(id);
    onClose();
  };

  return (
    <ModalDialog
      onClose={onClose}
      open={isOpen}
      header={'Are you sure you want to delete this income?'}
      actions={
        <Button variant="contained" color="error" onClick={onDeleteIncome}>
          yes, delete
        </Button>
      }
    ></ModalDialog>
  );
};

export default DeleteIncomeModal;
