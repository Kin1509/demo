import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { Fragment, useState } from "react";
import { nanoid } from 'nanoid';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
function App() {
  let i = 1;
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Hoten: "",
    Tel: "",
    Quyen: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      Hoten: addFormData.Hoten,
      Tel: addFormData.Tel,
      Quyen: addFormData.Quyen,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const [editFormData, setEditFormData] = useState({
    Hoten: "",
    Tel: "",
    Quyen: "",
  });


  const [editContactId, setEditContactid] = useState(null);
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactid(contact.id);
    const formValues = {
      Hoten: contact.Hoten,
      Tel: contact.Tel,
      Quyen: contact.Quyen,
    };
    setEditFormData(formValues);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      Hoten: editFormData.Hoten,
      Tel: editFormData.Tel,
      Quyen: editFormData.Quyen,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact)=> contact.id === editContactId)
    newContacts[contacts] = editedContact;
    setContacts(newContacts);
    setEditContactid(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="App">
      <div className="header">
        <p id="title">Quản lý thành viên</p>
      </div>
      <div class="search-container">
        <input
          type="text"
          class="form-control search-input"
          placeholder="Nhập từ khóa"
        />
        <button class="btn search-button">Tìm</button>
      </div>

      <div className="Body">
        <div className="body-left">
        <form onSubmit={handleEditFormSubmit}>
          <table class="table table-striped" id="render">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Điện thoại</th>
                <th scope="col">Quyền</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      contact={contact}
                      index = {index}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleDeleteClick = {handleDeleteClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      index = {index}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    ></ReadOnlyRow>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
          </form>
        </div>

        <div class="body-right">
          <p>Thêm mới</p>
          <div id="Add">
            <div class="form-body">
              <p>Tên User</p>
              <form onSubmit={handleAddFormSubmit}>
                <div class="form-group">
                  <input
                    onChange={handleAddFormChange}
                    name="Hoten"
                    type="text"
                    class="form-control w-80"
                    placeholder="Tên"
                  />
                </div>
                <div class="form-group">
                  <input
                    onChange={handleAddFormChange}
                    name="Tel"
                    type="text"
                    class="form-control w-80"
                    placeholder="Tel"
                  />
                </div>
                <div class="form-group">
                  <select
                    onChange={handleAddFormChange}
                    class="form-select"
                    name="Quyen"
                  >
                    <option selected>Quyền</option>
                    <option value="Admin">Admin</option>
                    <option value="Modrator">Modrator</option>
                    <option value="Nomal">Nomal</option>
                  </select>
                </div>
                <button
                  onClick={handleAddFormSubmit}
                  type="submit"
                  class="btn btn-primary w-100"
                >
                  Thêm mới
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
