import { ReactElement } from "react";
import { FaPlay } from "react-icons/fa6";
import Card from "./components/Card";
import TopSide from "./components/TopSide";
import Icon from "./components/Icon";
import Content from "./components/Content";
import list from "./data";
import { ListDaily } from "./types/types";
import uuid from "react-uuid";
import { MdArrowForwardIos } from "react-icons/md";

const App = (): ReactElement => {
  return (
    <main>
      <Card>
        <div className="card-header">
          <TopSide />
          <div className="play-button">
            <Icon
              source={<FaPlay className="icon-inside icon-play" />}
              classNameOfParentElement={"icon-circle"}
            />
          </div>
        </div>
        <Content>
          <p>daily health</p>
          <ul>
            {list.map(({ title, icon }: ListDaily, idx: number): ReactElement => {
              return (
                <li key={uuid()}>
                  <div>
                    <span>
                      <Icon source={icon} />
                      <h3>{title}</h3>
                    </span>
                    <MdArrowForwardIos className="icon-arrow-right" />
                  </div>
                  {idx != list.length - 1 && <div className="end-line"/>}
                </li>
              );
            })}
          </ul>
        </Content>
      </Card>
    </main>
  );
};

export default App;
