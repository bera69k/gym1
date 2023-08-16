
const RightSideLocation = (props) => {
  // eslint-disable-next-line react/prop-types
  const { day, trainerName1, trainerName2 } = props;
  return (
    <div className="hover:-translate-x-4 ease-in duration-300 bg-white hover:rounded-2xl relative">
    <div className="grid grid-cols-2 ">
      <div className='text-center m-auto'>
        <div>
          <p>
            Train on {day} with
          </p>
          <p>{trainerName1}</p>
        </div>
      </div>
      <div className='text-center m-auto relative'>
        <div>
          <p className="">Train on noon with</p>
          <p className="">{trainerName2}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RightSideLocation;
