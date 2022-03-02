import { useState } from "react";
import { useFetchProducts } from "../hooks/use-fetch-products";

const ProductList = () => {
  const { productsList, fetchProductsByCategory, productsByCategory } =
    useFetchProducts();
  const [productDetail, setProductDetail] = useState([]);
  const [productSelected, setProductSelected] = useState<number>();

  const [category, setCategory] = useState<string>();

  const handleCategory = (c: string) => {
    setCategory(c);
    fetchProductsByCategory(c);
    setProductDetail([]);
    setProductSelected(undefined);
  };

  const handleDisplayProductDetails = (productName: number, index: number) => {
    const productDetail = productsList?.filter(
      (p: any) => p?.name === productName
    );
    setProductDetail(productDetail);
    setProductSelected(index);
  };

  const DetailComponent = () => {
    return (
      <div className="ProductDetail">
        {productDetail.map((p: any) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div className="itemDetail">
                Categoria: <span>{p.category}</span>
              </div>
              <div className="itemDetail">
                Produto: <span>{p.name}</span>{" "}
              </div>
              <div className="itemDetail">
                Valor:{" "}
                <span>
                  R<span>&#36;</span>
                  {" " + p.preco.toFixed(2)}
                </span>
              </div>
              <div className="itemDetail">
                Descrição: <span> {p.descricao}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "300px",
          }}
        >
          <div
            className="selectContainer"
            style={{ marginBottom: 30, marginTop: 40 }}
          >
            <p style={{ color: "#42d3ff" }}>Escolha uma categoria:</p>
            <select
              name="cars"
              id="cars"
              value={category}
              onChange={(e: any) => handleCategory(e.target.value)}
            >
              <option value=""> Todos produtos </option>
              <option value="Roupas">Roupas</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Calçados">Calçado</option>
            </select>
          </div>

          <div className="ProductsContainer">
            {productsByCategory.length === 0 &&
              productsList?.map((p: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="ProductItem"
                    style={{
                      boxShadow:
                        productSelected === idx
                          ? "rgba(235, 235, 235, 0.35) 0px 5px 15px"
                          : "",
                      backgroundColor: productSelected === idx ? "#42d3ff" : "",
                    }}
                    onClick={() => handleDisplayProductDetails(p.name, idx)}
                  >
                    {p.name}
                  </div>
                );
              })}
          </div>

          <div className="ProductsContainer">
            {productsByCategory?.map((p: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="ProductItem"
                  style={{
                    boxShadow:
                      productSelected === idx
                        ? "rgba(235, 235, 235, 0.35) 0px 5px 15px"
                        : "",
                    backgroundColor: productSelected === idx ? "#42d3ff" : "",
                  }}
                  onClick={() => handleDisplayProductDetails(p.name, idx)}
                >
                  {p.name}
                </div>
              );
            })}
          </div>
          {productDetail.length !== 0 && <DetailComponent />}
        </div>
      </div>
    </>
  );
};

export default ProductList;
