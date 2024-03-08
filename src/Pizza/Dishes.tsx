import {Dish} from '../types';

interface Props {
  dishes: Dish[];
  deleteDish: (id: string) => void;
}

const Dishes: React.FC<Props> = () => {
  return (
    <>
      <h4>Dishes</h4>

    </>
  )
}
