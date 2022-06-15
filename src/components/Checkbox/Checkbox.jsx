import  React from 'react';
import { Checkbox } from './styleCheckbox';


export function Check() {
   return (
      <label>
         <Checkbox type="checkbox" />
         I accept the terms and privacy
      </label>
   );
}
export default Check;