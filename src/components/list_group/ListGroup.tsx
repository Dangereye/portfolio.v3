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
      <h3 className='heading heading--h3 animate-list-item'>{heading}</h3>
      <ul className='list'>{list.map((item) => renderItem(item))}</ul>
    </div>
  );
}
