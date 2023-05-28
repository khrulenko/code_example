import { CurrencyChipProps } from '.';
import { StyleFunction } from '../../../common/types';

const createChipWrapperStyles: StyleFunction<CurrencyChipProps> = ({
  theme: { palette },
  label,
}) => ({
  backgroundColor: palette.currencies[label],
});

export { createChipWrapperStyles };
