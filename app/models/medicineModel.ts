import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { PrescriptionModel } from "./";

@Table({
    tableName: 'medicines',
    timestamps: true,
})

export class MedicineModel extends Model<MedicineModel> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        {
            type: DataType.STRING(200),
            allowNull: false,
            unique: true
        }
    )
    name!: string;

    @Column(
        {
            type: DataType.FLOAT,
            allowNull: false
        }
    )
    quantity!: number;

    @Column(
        {
            type: DataType.DATE,
            allowNull: false,
            unique: true
        }
    )
    expirationDate!: string;

    @Column(
        {
            type: DataType.FLOAT,
            allowNull: false
        }
    )
    price!: number;

    @HasMany(() => PrescriptionModel)
    prescriptions!: PrescriptionModel[];
}  