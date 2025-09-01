import HeadWaiter from './HeadWaiter.jsx';

const Host = ({order}) => {
  return (
    <div>
      <p>~~~~~~~~~~~~~~~~</p>
      Host ⬇️✉️
      <p>~~~~~~~~~~~~~~~~</p>
        <HeadWaiter order={order} />
    </div>
  );
};

export default Host;