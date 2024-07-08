import React from 'react'

const ReadOnlyRow = ({ contact,index, handleEditClick, handleDeleteClick}) => {
    return (
        <tr key={contact.id}>
            <th scope="row">{index + 1}</th>
            <td>{contact.Hoten}</td>
            <td>{contact.Tel}</td>
            <td>{contact.Quyen}</td>
            <td className='act'>
                <button type="button" class="btn btn-warning" onClick={(event)=> handleEditClick(event,contact)}><i class="fa-regular fa-pen-to-square"> </i> Sửa</button>
                <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>Xóa</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow