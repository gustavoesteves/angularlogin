using System.ComponentModel.DataAnnotations;

namespace AngularDefaultLoginProject.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}