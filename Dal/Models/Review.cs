using System;
using System.Collections.Generic;

namespace Dal.Models;

public class Review
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int Grade { get; set; }

    public string? Comment { get; set; }

    public DateTime Date { get; set; }

    public virtual User User { get; set; } = null!;
}
