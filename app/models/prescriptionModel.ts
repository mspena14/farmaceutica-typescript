import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { PatientModel, MedicineModel } from "./";

@Table({
    tableName: 'prescriptions',
    timestamps: true,
})

export class PrescriptionModel extends Model<PrescriptionModel> {
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
    frequency!: string;

    @Column(
        {
            type: DataType.FLOAT,
            allowNull: false
        }
    )
    dose!: number;

    @Column(
        {
            type: DataType.DATE,
            allowNull: false,
            unique: true
        }
    )
    duration!: string;

    @ForeignKey(() => PatientModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    patientId!: number;

    @BelongsTo(() => PatientModel)
    patient!: PatientModel;

    @ForeignKey(() => MedicineModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    medicineId!: number;

    @BelongsTo(() => MedicineModel)
    medicine!: MedicineModel;

}  