import { Fragment } from 'react';

type ListGroupProps = {
  heading: string;
  list: string[];
  renderItem: (item: string) => React.ReactNode;
};

export default function ListGroup({
  heading,
  list,
  renderItem,
}: ListGroupProps) {
  return (
    <div className='list-group animate-list'>
      <h3 className='heading heading--h3 animate-list-item'>{heading}</h3>
      <ul className='list'>
        {list.map((item) => (
          <Fragment key={item}>{renderItem(item)}</Fragment>
        ))}
      </ul>
    </div>
  );
}
