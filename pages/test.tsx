import { Button } from 'react-bootstrap';
import { testApiService } from '../lib/testApiService';

export default function test() {
  return <Button onClick={testApiService}>test</Button>;
}
