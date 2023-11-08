import Heading3 from '../text_elements/Heading3';

type ListGroupProps<T> = {
  heading: string;
  list: T[];
  renderKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
};

export default function ListGroup<T>({
  heading,
  list,
  renderKey,
  renderItem,
}: ListGroupProps<T>) {
  return (
    <div className='list-group animate-list'>
      <Heading3 heading={heading} />
      <ul className='list'>
        {list.map((item) => (
          <li key={renderKey(item)} className='list__item animate-list-item'>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
