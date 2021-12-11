import "./ModalOverlay.scss";
import { ArrowCircleDown } from "iconsax-react";
const ModalOverlay = () => {
  return (
    <div className="overlay">
      <ArrowCircleDown size="50" color="#FF8A65" />
      <h3>Sản phẩm đã được thêm vào giỏ hàng</h3>
    </div>
  );
};

export default ModalOverlay;
