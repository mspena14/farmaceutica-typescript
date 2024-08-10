import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { PrescriptionModel } from "./";

@Table({
    tableName: 'patiens',
    timestamps: true,
})

export class PatientModel extends Model<PatientModel> {
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
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    age!: number;

    @Column(
        {
            type: DataType.STRING(200),
            allowNull: false,
            unique: true
        }
    )
    medicalHistory!: string

    @HasMany(() => PrescriptionModel)
    prescriptions!: PrescriptionModel[];

}  