import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Button from "./builder-components/Button";
import InputShortText from "./builder-components/InputShortText";
import InputLongText from "./builder-components/InputLongText";
import InputNumber from "./builder-components/InputNumber";
import Title from "./builder-components/Title";
import Text from "./builder-components/Text";
import Description from "./builder-components/Description";
import Card from 'react-bootstrap/Card';

var counter = 0;
const makeComponent = (prop, register) => {
   counter += 1
   const i = (prop.id ? prop.id : counter)
   switch (prop.type) {
      case "text":
         return Text(prop, i);
      case "input-long-text":
         return InputLongText(prop, i, register);
      case "input-number":
         return InputNumber(prop, i, register);
      case "input-short-text":
         return InputShortText(prop, i, register);
      case 'button':
         return Button(prop, i);
      default:
         console.log("Could not find code for " + prop.type);
         return <Text></Text>;
   }
}
export default function Builder({ config }) {
   const { register, getValues } = useForm();
   const getAllValues = getValues();

  // watch builder state changes
  useEffect(() => {
    console.log("submitted content:", getAllValues);
  }, [getAllValues]);
   counter += 2; 
   var res = (<Card className='default-card' style={config.style ? config.style : {}} >
      <Card.Body>
         <form>
            {config.title && Title(config.title, counter - 1)}
            {config.description && Description(config.description, counter)}
            {config.components?.length > 0 && config.components.map((item) =>
            (
               makeComponent(item, register)
            ))}
         </form>
      </Card.Body>
   </Card>);
   return res;
}