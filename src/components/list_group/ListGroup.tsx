import Heading3 from '../text_elements/Heading3';

type ListGroupProps<T> = {
  heading: string;
  list: T[];
  listImage?: 'image' | '';
  renderKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
  anim?: string;
};

export default function ListGroup<T>({
  heading,
  list,
  listImage = '',
  renderKey,
  renderItem,
  anim = '',
}: ListGroupProps<T>) {
  return (
    <div className='list-group'>
      <Heading3 heading={heading} anim={anim} />
      <ul className='list'>
        {list.map((item) => (
          <li
            key={renderKey(item)}
            className={`list__item ${listImage} ${anim}`}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
