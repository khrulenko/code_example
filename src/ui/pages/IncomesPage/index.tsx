import { useSelector } from 'react-redux';
import { Button, Tooltip, styled } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { getIncomes } from '../../../redux/store';
import Loader from '../../components/Loader';
import PageLayout from '../../layouts/PageLayout';
import { createAddIncomeButtonStyles } from './styles';
import useDisclosure from '../../../common/hooks/useDisclosure';
import NoIncomesAlert from '../../patterns/NoIncomesAlert';
import AddIncomeModal from '../../patterns/AddIncomeModal';
import IncomesTable from '../../components/IncomesTable';

const AddIncomeButton = styled(Button)(createAddIncomeButtonStyles);

const IncomesPage = () => {
  const { items: incomes, loading } = useSelector(getIncomes);
  const addingDialog = useDisclosure();

  const areThereIncomes = incomes?.length;
  const isLoaderShown = !areThereIncomes && loading;

  const postfix = (
    <Tooltip title="Add income" placement={'top'}>
      <AddIncomeButton
        data-testid="addIncomeButton"
        onClick={addingDialog.onOpen}
      >
        <AddCircleRoundedIcon fontSize="large" />
      </AddIncomeButton>
    </Tooltip>
  );

  if (isLoaderShown) return <Loader />;

  return (
    <PageLayout header="Incomes" postfix={postfix}>
      {areThereIncomes ? <IncomesTable /> : <NoIncomesAlert />}

      <AddIncomeModal
        isOpen={addingDialog.isOpen}
        onClose={addingDialog.onClose}
      />
    </PageLayout>
  );
};

export default IncomesPage;
