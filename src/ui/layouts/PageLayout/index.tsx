import { styled, Stack, Divider, Paper, Typography } from '@mui/material';
import { createPageCanvasStyles } from './styles';

type PageLayoutProps = {
  header: string;
  children?: any;
};

const PageCanvas = styled(Paper)(createPageCanvasStyles);

const PageLayout = ({ header, children }: PageLayoutProps) => {
  return (
    <PageCanvas elevation={0}>
      <Stack spacing={2}>
        <Typography fontWeight="bold" variant="h4">
          {header}
        </Typography>
        <Divider />
        {children}
      </Stack>
    </PageCanvas>
  );
};

export default PageLayout;
