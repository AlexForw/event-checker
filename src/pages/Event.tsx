import { FC } from "react";
import { useAppSelector } from "../hook";

const Event: FC = () => {
    const name = useAppSelector(state => state.login.name)
    return (
        <div className="event__name">
            Hello, my dear {name}
        </div>
    );
};

export default Event;