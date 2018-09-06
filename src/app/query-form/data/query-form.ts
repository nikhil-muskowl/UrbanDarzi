export class QyeryFormData {
    name: string = '';
    email: string = '';
    contact: string = '';
    enquiry_type_id: number=null;
    enquiry_detail: any[];

    clear() {
        this.name = '';
        this.email = '';
        this.contact = '';
        this.enquiry_type_id=null;
        this.enquiry_detail = [];
    }

    clear_detail(){
        this.enquiry_detail = [];
    }
}

export class Personal {
    name: string = '';
    email: string = '';
    contact: string = '';
}

export class Details {
    enquiry_detail: any[];
}
