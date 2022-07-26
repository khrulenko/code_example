import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';

type PlugSizes = 'sm' | 'md' | 'lg';

interface Props {
  children?: any;
  size?: PlugSizes;
  isSticky?: boolean;
}

/*
 * Plug component
 */
const Plug = (props: Props) => {
  const { children = 'here is empty yet' } = props;
  const styles = useMultiStyleConfig('plug', props);

  return (
    <Box data-testid="plugtext" sx={styles.wrapper}>
      <Box sx={styles.plug}>{children}</Box>
    </Box>
  );
};

export default chakra(Plug);
