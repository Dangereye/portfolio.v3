import Heading3 from '../text_elements/Heading3';

type ListGroupProps<T> = {
  heading: string;
  list: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function ListGroup<T>({
  heading,
  list,
  renderItem,
}: ListGroupProps<T>) {
  return (
    <div className='list-group animate-list'>
      <Heading3 heading={heading} />
      <ul className='list'>
        {list.map((item) => (
          <li className='list__item'>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
}
