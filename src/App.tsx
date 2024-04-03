import { ReactElement, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa6";
import Card from "./components/Card";
import TopSide from "./components/TopSide";
import Icon from "./components/Icon";
import Content from "./components/Content";
import list from "./data";
import { ListDaily } from "./types/types";
import uuid from "react-uuid";
import { MdArrowForwardIos } from "react-icons/md";

const App = (): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <main>
      <Card>
        <div className="card-header">
          <TopSide />
          <div
            className="play-button"
            onClick={(): void => {
              setTimeout((): void => setPlay((p: boolean): boolean => !p), 300);
            }}
          >
            {play ? (
              <Icon
                source={<FaStop className="icon-inside icon-stop" />}
                classNameOfParentElement={"icon-circle"}
              />
            ) : (
              <Icon
                source={<FaPlay className="icon-inside icon-play" />}
                classNameOfParentElement={"icon-circle"}
              />
            )}
          </div>
        </div>
        <Content>
          <p>daily health</p>
          <ul>
            {list.map(
              ({ title, icon }: ListDaily, idx: number): ReactElement => {
                return (
                  <li key={uuid()}>
                    <div>
                      <span>
                        <Icon source={icon} />
                        <h3>{title}</h3>
                      </span>
                      <MdArrowForwardIos className="icon-arrow-right" />
                    </div>
                    {idx != list.length - 1 && <div className="end-line" />}
                  </li>
                );
              }
            )}
          </ul>
        </Content>
      </Card>
    </main>
  );
};

export default App;
