import { ManageInfo } from "./ManageInfo";
import AdminLayout from "../../../layouts/adminLayout/AdminLayout";
import { styled } from "styled-components";

const BarManagement = () => {
  return (
    <AdminLayout>
      <StyledMenu>
        <ManageInfo />
      </StyledMenu>
    </AdminLayout>
  );
};

const StyledMenu = styled.menu`
  width: calc(100% - 40px);
  margin-bottom: 20px;
  padding: 0 20px;

  & > input {
    display: none;
  }

  & > label {
    margin-right: 20px;
    font-family: var(--font--Bold);
    color: var(--gray200-color);
    cursor: pointer;
  }

  & > input:checked + label {
    border-bottom: 2px solid var(--main-color);
    color: black;
  }
`;

export default BarManagement;
