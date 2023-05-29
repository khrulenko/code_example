import {
  styled,
  Stack,
  Divider,
  Paper,
  Typography,
  LinearProgress,
} from '@mui/material';
import { createHeaderWrapperStyles, createPageCanvasStyles } from './styles';

type PageLayoutProps = {
  header: string;
  children?: any;
  postfix?: any;
  loading?: boolean;
};

const PageCanvas = styled(Paper)(createPageCanvasStyles);
const HeaderWrapper = styled(Stack)(createHeaderWrapperStyles);

const PageLayout = ({
  header,
  postfix,
  children,
  loading = false,
}: PageLayoutProps) => {
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

        {loading ? <LinearProgress color="primary" /> : children}
      </Stack>
    </PageCanvas>
  );
};

export default PageLayout;
