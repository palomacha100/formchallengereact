import  React from 'react';
import { Checkbox, Terms} from './styleCheckbox';



export function Check() {
   const [terms, setTerms] = React.useState(false);
   return (
      <Terms>
         <Checkbox type="checkbox" value="Terms" checked={terms} onChange={({target}) => setTerms(target.checked)}/>
         I accept the terms and privacy
      </Terms>
   );
}
export default Check;