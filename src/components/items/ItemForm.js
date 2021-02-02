import React from 'react';
import { useForm } from 'react-hook-form';

const ItemForm = ({ initialValues, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: initialValues.name,
            description: initialValues.description,
            brand: initialValues.brand,
            price: initialValues.price,
            stock: initialValues.stock
        }
    });

    return (
        <form className="ItemForm" onSubmit={handleSubmit(onSubmit)} className="ui form error">
            <label className="label">Name</label>
            <input
                name="name"
                ref={register({ required: true })}
                autoComplete="off"
            />
            {errors.name && errors.name.type === "required" && (
                <p className="ui error message">This field is required</p>
            )}
            <label className="label">Image</label>
            {/* <input
                name="image"
                ref={register({ required: true })}
                type="file"
            /> */}
            {/* {errors.image && errors.image.type === "required" && (
                <p className="ui error message">This field is requied</p>
            )} */}
            <br />

            <label>Description</label>
            <input
                name="description"
                ref={register({ required: true })}
                autoComplete="off"
            />
            {errors.description && errors.description.type === "required" && (
                <p className="ui error message">This field is required</p>)
            }

            <label>Brand</label>
            <select name="brand" ref={register({ required: true })}>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Nokia">Nokia</option>
                <option value="Xiaomi">Xiaomi</option>
            </select>

            <div className="fields">
                <div className="eight wide field">
                    <label>Price</label>
                    <input
                        name="price"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]/i,
                            }
                        })}
                        autoComplete="off"
                    />
                    {errors.price && (
                        <p className="ui error message">This field is number field</p>)
                    }
                </div>
                <div className="eight wide field">
                    <label>Stock</label>
                    <input
                        name="stock"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[0-9]/i,
                            }
                        })}
                        autoComplete="off"
                    />
                    {errors.stock && (
                        <p className="ui error message">This field is number field</p>)
                    }
                </div>
            </div>

            <input type="submit" className="ui button primary" value="Submit" />
        </form>
    )
}

export default ItemForm;