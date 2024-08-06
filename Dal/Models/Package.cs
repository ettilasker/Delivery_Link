using System;
using System.Collections.Generic;

namespace Dal.Models;

public partial class Package
{
    public int Id { get; set; }

    public TimeSpan Time { get; set; }

    public string Address { get; set; } = null!;

    public DateTime Data { get; set; }

    public string AddressDestination { get; set; } = null!;

    public int UserId { get; set; }

    public virtual User User { get; set; } = null!;
}
