import { ReactElement } from "react";
import Icon from "./Icon";
import { MdArrowBackIos } from "react-icons/md";

const TopSide = (): ReactElement => {
  return (
    <div className="card-top">
      <div>
        <Icon
          source={
            <MdArrowBackIos
              className="icon-inside icon-back"
              style={{ color: "#01011" }}
            />
          }
          classNameOfParentElement={"icon-circle"}
        />
      </div>
      <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla et
          dolores pariatur nobis maiores voluptate
        </p>
      </div>
    </div>
  );
};

export default TopSide;
