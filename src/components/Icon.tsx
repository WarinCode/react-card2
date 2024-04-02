import { ReactElement, FC } from 'react'
import { IconProps } from '../types/types';

const Icon: FC<IconProps> = ({ source, classNameOfParentElement }): ReactElement => {
  return (
    <div className={classNameOfParentElement}>
      {source}
    </div>
  )
}

export default Icon;