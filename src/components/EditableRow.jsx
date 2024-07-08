import React from 'react'

const EditableRow = ({ contact,index, editFormData, handleEditFormChange , handleDeleteClick}) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <input type="text" name='Hoten' onChange={handleEditFormChange} value={editFormData.Hoten} /> </td>
      <td><input type="text" name='Tel' onChange={handleEditFormChange} value={editFormData.Tel}/> </td>
      <td><select class="form-select" name='Quyen' onChange={handleEditFormChange} value={editFormData.Quyen}>
        <option value="Admin">Admin</option>
        <option value="Modrator">Modrator</option>
        <option value="Nomal">Nomal</option>
      </select> </td>
      <td className='act'>
        <button type="submit" class="btn btn-warning"><i class="fa-regular fa-pen-to-square"> </i> Lưu</button>
        <button type="button" class="btn btn-danger" onClick={()=> handleDeleteClick(contact.id)}>Xóa</button>
        </td>

    </tr>
  )
}

export default EditableRow