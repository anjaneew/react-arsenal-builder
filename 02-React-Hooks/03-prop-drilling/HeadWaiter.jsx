import KitchenStaff from './KitchenStaff.jsx';

const HeadWaiter = ({order}) => {
  return (
    <div>
      
      HeadWaiter ⬇️✉️
     <p>~~~~~~~~~~~~~~~~</p>

        <KitchenStaff order={order}/>
    </div>
  );
};

export default HeadWaiter;