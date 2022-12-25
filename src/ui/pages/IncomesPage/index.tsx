import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Stack,
  Tooltip,
  styled,
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import useManageData from '../../../firebase/useManageData';
import { getIncomes } from '../../../redux/store';
import Loader from '../../components/Loader';
import PageLayout from '../../layouts/PageLayout';
import {
  createAddIncomeButtonStyles,
  createIncomesTableStyles,
  createActionButtonStyles,
} from './styles';
import { Income } from '../../../redux/slices/incomesSlice';
import useDisclosure from '../../../common/hooks/useDisclosure';
import NoIncomesAlert from '../../patterns/NoIncomesAlert';
import AddIncomeModal from '../../patterns/AddIncomeModal';
import EditIncomeModal from '../../patterns/EditIncomeModal';

const IncomesTable = styled(Table)(createIncomesTableStyles);
const ActionButton = styled(Button)(createActionButtonStyles);
const AddIncomeButton = styled(Button)(createAddIncomeButtonStyles);

const headers = ['Date', 'Amount', 'Currency', 'Comment', ''];

const IncomesPage = () => {
  const [editingIncomeId, editingIncomeIdSet] = useState<string>('');

  const { items: incomes, loading } = useSelector(getIncomes);
  const { deleteIncome } = useManageData();

  const addingDialog = useDisclosure();
  const editingDialog = useDisclosure();

  const areThereIncomes = incomes?.length;

  const postfix = (
    <AddIncomeButton onClick={addingDialog.onOpen}>
      <AddCircleRoundedIcon fontSize="large" />
    </AddIncomeButton>
  );

  const createHeaderCell = (header: string) => (
    <TableCell key={header}>{header}</TableCell>
  );

  const createIncomeRow = ({ id, date, amount, currency, comment }: Income) => {
    return (
      <TableRow key={id}>
        <TableCell>{date}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
        <TableCell>{comment}</TableCell>
        <TableCell>
          <Stack spacing={1} direction="row" justifyContent="center">
            <Tooltip title="Edit">
              <ActionButton
                variant="contained"
                onClick={() => {
                  editingIncomeIdSet(id);
                  editingDialog.onOpen();
                }}
              >
                <EditRoundedIcon />
              </ActionButton>
            </Tooltip>

            <Tooltip title="Delete">
              <ActionButton
                variant="contained"
                onClick={() => deleteIncome(id)}
              >
                <DeleteForeverRoundedIcon />
              </ActionButton>
            </Tooltip>
          </Stack>
        </TableCell>
      </TableRow>
    );
  };

  if (!areThereIncomes && loading) {
    return <Loader />;
  }

  return (
    <PageLayout header="Incomes" postfix={postfix}>
      {areThereIncomes ? (
        <IncomesTable>
          <TableHead>
            <TableRow>{headers.map(createHeaderCell)}</TableRow>
          </TableHead>
          <TableBody>{incomes.map(createIncomeRow)}</TableBody>
        </IncomesTable>
      ) : (
        <NoIncomesAlert />
      )}

      <AddIncomeModal
        isOpen={addingDialog.isOpen}
        onClose={addingDialog.onClose}
      />

      <EditIncomeModal
        id={editingIncomeId}
        isOpen={editingDialog.isOpen}
        onClose={editingDialog.onClose}
      />
    </PageLayout>
  );
};

export default IncomesPage;
