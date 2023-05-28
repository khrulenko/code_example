import { Chip, ChipProps, styled } from '@mui/material';
import { Currencies } from '../../../common/constants';
import { createChipWrapperStyles } from './styles';

export interface CurrencyChipProps extends Omit<ChipProps, 'label'> {
  label: Currencies;
}

const ChipWrapper = styled(Chip)(createChipWrapperStyles);

const CurrencyChip = (props: CurrencyChipProps) => <ChipWrapper {...props} />;

export default CurrencyChip;
