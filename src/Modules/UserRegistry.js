import React, { useState } from 'react';

const initialFormData = {
    MaterialThickness: '',
    WardrobeLength: '',
    WardrobeWidth: '',
    WardrobeDepth: '',
    Noofcabinets: '',
    BacksheetGroove: '',
    Skirting: '',
    ShelfOffset: '',
    Hangingareaspace: '',
    DrawerSize1: '',
    DrawerSize2: '',
    NoofDoors: '',
    EdgeThicknessfordoors: '',
    DoorSpacing: '',
  };
  
  const formConfig = [
    {
      label: 'Material Thickness',
      fieldName: 'MaterialThickness',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Wardrobe Length',
      fieldName: 'WardrobeLength',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Wardrobe Width',
      fieldName: 'WardrobeWidth',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Wardrobe Depth',
      fieldName: 'WardrobeDepth',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'No of cabinets',
      fieldName: 'Noofcabinets',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Back sheet Groove',
      fieldName: 'BacksheetGroove',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Skirting',
      fieldName: 'Skirting',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Shelf Offset',
      fieldName: 'ShelfOffset',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Hanging area space',
      fieldName: 'Hangingareaspace',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Drawer Size 1',
      fieldName: 'DrawerSize1',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Drawer Size 2',
      fieldName: 'DrawerSize2',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'No of Doors',
      fieldName: 'NoofDoors',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Edge Thickness for doors',
      fieldName: 'EdgeThicknessfordoors',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
    {
      label: 'Door Spacing',
      fieldName: 'DoorSpacing',
      type: 'number',
      IsMandatory: 0,
      IsVisible: 1,
      IsDisable: 0,
    },
  ];



  const WardrobeForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [tableData, setTableData] = useState([]); // State to store data
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTableData([...tableData, formData]); // Add the form data to the table data
      setFormData(initialFormData); // Clear the form after submission
    };
  
    return (
      <div className='flex flex-wrap items-start w-full'>
        <h1 className="w-full p-2 mb-3 text-xl font-semibold text-blue-500  rounded-md shadow-lg">
          USER REGISTRY
        </h1>
  
        <form onSubmit={handleSubmit} className='w-full md:w-1/2 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 p-2 transition ease-in-out'>
  
  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Submit</button>
    </form>
  
        {/* Display calculated data */}
          <div className='w-full md:w-1/2 p-2'>
            <h1 className="text-sm md:text-lg font-semibold text-blue-500 mb-4">Calculated Data</h1>
            <CalculatedDataSection formData={formData}/>
            <button
              onClick={() => {
              }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full mt-1 text-xs md:text-sm"
            >
              Confirm
            </button>
          </div>
    
  
        {/* Display saved data */}
        {tableData.length > 0 && (
          <div className='w-full p-4'>
            <h2>Saved Data</h2>
            {/* Render your saved data in a card-like format */}
            {tableData.map((rowData, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md mt-4">
                {/* Display individual card data */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

  const calculateRowData = (formData) => {
    return [
        {
          label: "Side Panel",
          length: formData.WardrobeLength,
          width: formData.WardrobeDepth,
        },
        {
          label: "Top",
          length: formData.WardrobeWidth - 2 * formData.MaterialThickness,
          width: formData.WardrobeDepth,
        },
        {
          label: "Bot",
          length: formData.WardrobeWidth - 2 * formData.MaterialThickness,
          width: Number(formData.WardrobeDepth) - Number(formData.BacksheetGroove),
        },
        {
          label: "CV",
          length: Number(formData.WardrobeLength) - Number(formData.Skirting) - 2 * formData.MaterialThickness,
          width: Number(formData.WardrobeDepth) - Number(formData.BacksheetGroove),
        },
        {
          label: "Full Shelves",
          length: formData.WardrobeWidth - 2 * formData.MaterialThickness,
          width: Number(formData.WardrobeDepth) - Number(formData.BacksheetGroove) - formData.ShelfOffset,
        },
        {
          label: "Half Shelf",
          length:(formData.WardrobeWidth - 2 * formData.MaterialThickness - formData.MaterialThickness) / 2,
          width: Number(formData.WardrobeDepth) - Number(formData.BacksheetGroove) - formData.ShelfOffset,
        },
        {
          label: "Quarter Shelf",
          length:
            ((formData.WardrobeWidth -
              2 * formData.MaterialThickness -
              formData.MaterialThickness) /
              2 -
              formData.MaterialThickness) /
            2,
          width:
            Number(formData.WardrobeDepth) -
            Number(formData.BacksheetGroove) -
            formData.ShelfOffset,
        },
        {
          label: "Skirting",
          length: formData.WardrobeWidth - 2 * formData.MaterialThickness,
          width: formData.Skirting,
        },
        {
          label: "Upper CV",
          length: formData.Hangingareaspace,
          width:
            Number(formData.WardrobeDepth) -
            Number(formData.BacksheetGroove) -
            formData.ShelfOffset,
        },
        {
          label: "Lower CV",
          length:
            formData.WardrobeLength -
            formData.Skirting -
            3 * formData.MaterialThickness -
            formData.Hangingareaspace,
          width:
            Number(formData.WardrobeDepth) -
            Number(formData.BacksheetGroove) -
            formData.ShelfOffset,
        },
      ];
      
  };
  
  
  const CalculatedDataRow = ({ slNo, label, length, width }) => (
    <div className="flex justify-between mt-2">
      <div className="w-1/4 text-xs md:text-sm">{slNo}</div>
      <div className="w-1/4 text-xs md:text-sm">{label}</div>
      <div className="w-1/4 text-xs md:text-sm">{length}</div>
      <div className="w-1/4 text-xs md:text-sm">{width}</div>
    </div>
  );
  
  const CalculatedDataSection = ({ formData }) => {
    const rowData = calculateRowData(formData);
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between">
          <div className="w-1/4 font-bold text-xs md:text-sm">Sl No</div>
          <div className="w-1/4 font-bold text-xs md:text-sm">Particulars</div>
          <div className="w-1/4 font-bold text-xs md:text-sm">Length</div>
          <div className="w-1/4 font-bold text-xs md:text-sm">Width</div>
        </div>
        {rowData.map((data, index) => (
          <CalculatedDataRow
            key={index}
            slNo={index + 1}
            label={data.label}
            length={data.length}
            width={data.width}
          />
        ))}
      </div>
    );
  };
  export default WardrobeForm;


const InputField = ({ field, formData, handleChange }) => {
  return (
    <div key={field.fieldName} class="relative z-0 w-full mb-2 group" >
            <input 
            type={field.type}
            id={field.fieldName}
            name={field.fieldName}
            value={formData[field.fieldName]}
            onChange={(e) => handleChange(e)}
            disabled={field.IsDisable}
            required={field.IsMandatory === 1}
            autocomplete="off"
            class="block py-2 px-0 w-full text-xs text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label  htmlFor={field.fieldName} class="truncate font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{field.label}</label>
        </div>
  );
};





