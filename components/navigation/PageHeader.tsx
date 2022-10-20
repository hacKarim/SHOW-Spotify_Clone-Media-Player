import { Text } from '@nextui-org/react';
import { ReactElement } from 'react';
import MotionHoc from '../common/MotionHoc';

export const PageHeader = MotionHoc((props: any): ReactElement => {
  return (
    <Text h1 size={40} weight="thin" style={{ width: '100%' }}>
      {props.text}
    </Text>
  );
});
