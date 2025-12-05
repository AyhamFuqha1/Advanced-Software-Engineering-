import { Column, PrimaryGeneratedColumn,Entity } from "typeorm"

@Entity('volunteer_doctors')    
export class VolunteerDoctor {
    @PrimaryGeneratedColumn()
    volunteer_id: number;

    @Column()
    doctor_id: number;

    @Column()
    mission_area: string;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

}
    