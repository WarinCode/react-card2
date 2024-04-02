import { ReactElement, FC } from 'react';
import { ContentProps } from '../types/types';

const Content: FC<ContentProps> = ({ children }): ReactElement => {
  return (
    <div className='daily'>
        {children}
    </div>
  )
}

export default Content;