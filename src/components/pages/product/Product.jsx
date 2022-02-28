import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import "./product.css";
import { productData } from "../../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className = "product">
        <div className="productTitleContainer">
            <h1 className="productTitle">
                Product
            </h1>
            <Link to = "/newProduct">
            <button className="productAddButton">
                Create
            </button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data = {productData} dataKey = "Sales" title = "Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://www.lowyat.net/wp-content/uploads/2021/09/Apple-iPhone-13-pro-max-launch-official-price-2-1140x912.jpg" alt="" className="productInfoImg" />
                    <span className="productName">
                        Iphone 13 Pro
                    </span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">
                            Sales:
                        </span>
                        <span className="productInfoValue">
                            $ 1,300
                        </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">
                            Active:
                        </span>
                        <span className="productInfoValue">
                            Yes
                        </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">
                            In Stock:
                        </span>
                        <span className="productInfoValue">
                            163
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productButtom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>
                        Product Name
                    </label>
                    <input type = "text" placeholder = "Iphone 13 Pro" />
                    <label>
                        In Stock
                    </label>
                    <select name = "inStock" id = "idStock">
                        <option value = "yes">
                            Yes
                        </option>
                        <option value = "no">
                            No
                        </option>
                    </select>
                    <label>
                        Active
                    </label>
                    <select name = "active" id = "active">
                        <option value = "yes">
                            Yes
                        </option>
                        <option value = "no">
                            No
                        </option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://www.lowyat.net/wp-content/uploads/2021/09/Apple-iPhone-13-pro-max-launch-official-price-2-1140x912.jpg" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type = "file" id = "file" style = {{display: "none"}} />
                    </div>
                    <button className = "productButton">
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product