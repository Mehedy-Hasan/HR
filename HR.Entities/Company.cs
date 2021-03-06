using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HR.Entities.Core;

namespace HR.Entities
{
    [Table("Companies")]
    public class Company:AuditableEntity
    {
        [Required]
        public string CompanyName{ get;set;}
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPersonEmail { get; set; }
        public string ContactPersonPhone { get; set; }
        public string FiscalYearStart { get; set; }
        public ICollection<Branch> Branchs{get;set;}
    }
}