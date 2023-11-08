import Heading3 from '../text_elements/Heading3';

type ListGroupProps<T> = {
  heading: string;
  list: T[];
  listImage?: 'image' | '';
  renderKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
};

export default function ListGroup<T>({
  heading,
  list,
  listImage = '',
  renderKey,
  renderItem,
}: ListGroupProps<T>) {
  return (
    <div className='list-group animate-list'>
      <Heading3 heading={heading} anim='animate-list-item' />
      <ul className='list'>
        {list.map((item) => (
          <li
            key={renderKey(item)}
            className={`list__item ${listImage} animate-list-item`}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
