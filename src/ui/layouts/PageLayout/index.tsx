import {
  styled,
  Stack,
  Divider,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { createHeaderWrapperStyles, createPageCanvasStyles } from './styles';

type PageLayoutProps = {
  header: string;
  children?: any;
  postfix?: any;
};

const PageCanvas = styled(Paper)(createPageCanvasStyles);
const HeaderWrapper = styled(Stack)(createHeaderWrapperStyles);

const PageLayout = ({ header, postfix, children }: PageLayoutProps) => {
  const { spacing } = useTheme();

  return (
    <PageCanvas elevation={0}>
      <Stack spacing={2}>
        <HeaderWrapper>
          <Typography fontWeight="bold" variant="h4">
            {header}
          </Typography>

          {postfix}
        </HeaderWrapper>

        <Divider />

        {children}
      </Stack>
    </PageCanvas>
  );
};

export default PageLayout;
