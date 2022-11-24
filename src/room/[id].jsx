

const Room = () => {

  return (
    <div className="room">
      <div className="room__header"></div>
      <div className="room__body">
        <div className="room__sidebar">
          <div className="room__sidebar__header"></div>
          <div className="room__sidebar__body"></div>
          <div className="room__chat"></div>
        </div>
        <div className="room__main-floor">
          <div className="table">
            {/* map users in the room to table */}
          </div>
        </div>
        <div className="room__footer">
          {/* map the scrum method here */}
        </div>
      </div>
    </div>
  )
}

export default Room