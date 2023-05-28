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
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {
  createActionButtonStyles,
  createIncomesTableWrapperStyles,
} from './styles';
import EditIncomeModal from '../../patterns/EditIncomeModal';
import DeleteIncomeModal from '../../patterns/DeleteIncomeModal';
import { getDateFromISO } from '../../../common/utils';
import { Income } from '../../../redux/slices/incomesSlice';
import { getIncomes } from '../../../redux/store';
import useDisclosure from '../../../common/hooks/useDisclosure';

const IncomesTableWrapper = styled(Table)(createIncomesTableWrapperStyles);
const ActionButton = styled(Button)(createActionButtonStyles);

const tooltipPlacement = 'top';
const headers = ['Date', 'Amount', 'Currency', 'Comment', ''];

const IncomesTable = () => {
  const [chosenIncomeId, chosenIncomeIdSet] = useState<string>('');
  const { items } = useSelector(getIncomes);

  const editingDialog = useDisclosure();
  const deletingDialog = useDisclosure();

  const createIncomeRow = ({ id, date, amount, currency, comment }: Income) => (
    <TableRow key={id}>
      <TableCell>{getDateFromISO(date)}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
      <TableCell>{comment}</TableCell>
      <TableCell>
        <Stack spacing={1} direction="row" justifyContent="center">
          <Tooltip title="Edit" placement={tooltipPlacement} followCursor>
            <ActionButton
              variant="contained"
              data-testid="editIncomeButton"
              onClick={() => {
                chosenIncomeIdSet(id);
                editingDialog.onOpen();
              }}
            >
              <EditRoundedIcon />
            </ActionButton>
          </Tooltip>

          <Tooltip title="Delete" placement={tooltipPlacement} followCursor>
            <ActionButton
              variant="contained"
              data-testid="deleteIncomeButton"
              onClick={() => {
                chosenIncomeIdSet(id);
                deletingDialog.onOpen();
              }}
            >
              <DeleteForeverRoundedIcon />
            </ActionButton>
          </Tooltip>
        </Stack>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <IncomesTableWrapper stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header: string) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{items.map(createIncomeRow)}</TableBody>
      </IncomesTableWrapper>

      <EditIncomeModal
        id={chosenIncomeId}
        isOpen={editingDialog.isOpen}
        onClose={editingDialog.onClose}
      />

      <DeleteIncomeModal
        id={chosenIncomeId}
        isOpen={deletingDialog.isOpen}
        onClose={deletingDialog.onClose}
      />
    </>
  );
};

export default IncomesTable;
